db.produtos.find({
  $and: [{ "valoresNutricionais.tipo": "calorias" },
  { "valoresNutricionais.0.quantidade": { $lt: 500 } }] },
  { _id: 0, nome: 1 });
