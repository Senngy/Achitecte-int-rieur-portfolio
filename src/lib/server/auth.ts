import { scryptSync, timingSafeEqual, randomBytes, randomUUID } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { dev } from '$app/environment';

const SESSION_DURATION_MS = 24 * 60 * 60 * 1000;
const COOKIE_NAME = 'admin_session';
const DATA_DIR = join(process.cwd(), 'data');
const SESSIONS_FILE = join(DATA_DIR, 'sessions.json');

let passwordHash: string | null = null;

function ensureDataDir() {
	if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
}

function loadSessions(): Record<string, { userId: string; expires: number }> {
	ensureDataDir();
	if (!existsSync(SESSIONS_FILE)) return {};
	try {
		return JSON.parse(readFileSync(SESSIONS_FILE, 'utf-8'));
	} catch {
		return {};
	}
}

function saveSessions(sessions: Record<string, { userId: string; expires: number }>) {
	ensureDataDir();
	writeFileSync(SESSIONS_FILE, JSON.stringify(sessions, null, 2), 'utf-8');
}

export function initAuth(adminPassword: string) {
	const salt = randomBytes(16).toString('hex');
	const key = scryptSync(adminPassword, salt, 64).toString('hex');
	passwordHash = `${salt}:${key}`;
}

function verifyPassword(password: string): boolean {
	if (!passwordHash) return false;
	const [salt, key] = passwordHash.split(':');
	const derivedKey = scryptSync(password, salt, 64).toString('hex');
	if (derivedKey.length !== key.length) return false;
	return timingSafeEqual(Buffer.from(derivedKey), Buffer.from(key));
}

export function createSession(userId: string): string {
	const sessions = loadSessions();
	const token = randomUUID();
	sessions[token] = { userId, expires: Date.now() + SESSION_DURATION_MS };
	saveSessions(sessions);
	return token;
}

export function validateSession(token: string): string | null {
	const sessions = loadSessions();
	const session = sessions[token];
	if (!session) return null;
	if (session.expires < Date.now()) {
		delete sessions[token];
		saveSessions(sessions);
		return null;
	}
	return session.userId;
}

export function invalidateSession(token: string): void {
	const sessions = loadSessions();
	delete sessions[token];
	saveSessions(sessions);
}

export function handleLogin(email: string, password: string): string | null {
	if (!verifyPassword(password)) return null;
	return createSession(email);
}

export function getCookieOptions() {
	return {
		httpOnly: true,
		sameSite: 'lax' as const,
		secure: !dev,
		path: '/',
		maxAge: 60 * 60 * 24
	};
}

export { COOKIE_NAME };
