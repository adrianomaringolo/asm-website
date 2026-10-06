// Ano em que a ASM começou a atuar; os anos de experiência são calculados a partir dele.
export const FOUNDING_YEAR = 2019;

export const yearsOfExperience = () =>
  new Date().getFullYear() - FOUNDING_YEAR;
