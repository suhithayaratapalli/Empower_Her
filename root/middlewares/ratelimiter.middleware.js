import rateLimit from 'express-rate-limit'

export const vehicleRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 3,
  message: "Too many vehicle creation requests"
})
