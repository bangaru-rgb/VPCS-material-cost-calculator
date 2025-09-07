function calculate() {
  let weight = parseFloat(document.getElementById("weight").value) || 0;
  let pcbCharges = parseFloat(document.getElementById("pcb").value) || 2;

  let heteroRate = 18.0;
  let customsTax = heteroRate * 0.11;
  let materialCost = heteroRate + customsTax;
  let materialPriceHetero = materialCost * weight;
  let gstHetero = materialPriceHetero * 0.18;
  let materialPlusGST = materialPriceHetero + gstHetero;
  let tcs = materialPlusGST * 0.01;
  let genetiqueToHetero = materialPlusGST + tcs;

  let apemclCharges = 0.07;
  let genetiqueMaterialCost = heteroRate + customsTax + pcbCharges + apemclCharges;
  let materialPriceGenetique = genetiqueMaterialCost * weight;
  let gstGenetique = materialPriceGenetique * 0.18;
  let vpcsToGenetique = materialPriceGenetique + gstGenetique;

  let rows = [
    ["ETP Weight", weight, "Total weight of the material."],
    ["Hetero material Rate", heteroRate.toFixed(2), "Rate per unit for Hetero material."],
    ["Customs Tax", customsTax.toFixed(2), "11% of Hetero Material Rate."],
    ["Material cost", materialCost.toFixed(2), "Hetero rate+Customs tax"],
    ["Material price @Hetero", materialPriceHetero.toFixed(2), "Material cost*Weight"],
    ["GST", gstHetero.toFixed(2), "18% of Material Price @ Hetero."],
    ["Material price+GST", materialPlusGST.toFixed(2), "Sum of Material Price @ Hetero and GST."],
    ["TCS", tcs.toFixed(2), "1% of (Material price+GST)"],
    ["Genetique to Hetero", genetiqueToHetero.toFixed(2), "Material price+GST+TCS", "highlight"],
    ["PCB Charges", pcbCharges.toFixed(2), "Additional charges for PCB."],
    ["APEMCL charges", apemclCharges.toFixed(2), "Additional charges for APEMCL."],
    ["Genetique material cost", genetiqueMaterialCost.toFixed(2), "Hetero rate+Customs tax+PCB+APEMCL"],
    ["Material Price @ Genetique", materialPriceGenetique.toFixed(2), "Genetique material cost*Weight"],
    ["GST", gstGenetique.toFixed(2), "18% of Material price @Gentique"],
    ["VPCS to Genetique", vpcsToGenetique.toFixed(2), "Material Price @ Genetique+GST", "highlight"]
  ];

  let tbody = document.getElementById("result");
  tbody.innerHTML = rows.map(r =>
    `<tr class="${r[3] || ""}"><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`
  ).join("");
}
