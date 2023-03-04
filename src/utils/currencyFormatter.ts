export function currencyFormatter(currency:number){
  return new Intl.NumberFormat('pt-BR',{style:"currency",currency:'BRL'}).format(currency)
}