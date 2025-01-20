let revokedTokens: Set<string> = new Set();

export const revokeToken = (token: string) => {
    revokedTokens.add(token);
};

export const isTokenRevoked = (token: string) => {
    return revokedTokens.has(token);
}