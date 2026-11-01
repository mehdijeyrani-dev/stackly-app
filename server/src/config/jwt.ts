const jwtConfig = {
  access: {
    secret: process.env.JWT_ACCESS_SECRET!,
    expiresIn: "15m" as const,
  },

  refresh: {
    secret: process.env.JWT_REFRESH_SECRET!,
    expiresIn: "7d" as const,
  },
};

export default jwtConfig;
