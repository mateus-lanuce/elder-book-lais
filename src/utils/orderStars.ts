/**
 *
 * função que decide se a estrela deve estar colorida,
 * com meia cor, ou vazia.
 *
 * @param evaluation
 * @param index
 * @returns 0 = full fill, 1 = empty, -1 = half fill
 */
const orderStars = (evaluation: number, index: number): number => {
  const fractionalPart = Math.abs(evaluation) - Math.floor(evaluation);

    console.log("floor:", Math.round(evaluation))

  if (evaluation > (index - 0.03)) {
    return 0;
  } else {
    //se for maior verificar se deve ser vazio ou meio
    return (index - evaluation > 0 && index - evaluation < 1) ? -1 : 1;
  }
};

export default orderStars;
