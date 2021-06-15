const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");
export const randomString = (length: number): string => {
	return new Array(length)
		.fill(undefined)
		.map(() => chars[Math.floor(Math.random() * chars.length)])
		.join("");
};
