// Add event listener for input changes
weightInput.addEventListener('input', calculateCosts);

// Add event listener for dropdown changes
dropdownInput.addEventListener('change', calculateCosts);

// Initial calculation when the page loads
calculateCosts();

function calculateCosts() {
  const selectedValue = dropdownInput.value;
  const weight = parseFloat(weightInput.value);

  if (selectedValue === 'ETP') {
    // ETP calculations
    const etpCost = weight * 100;
    const gst = etpCost * 0.18;
    const tcs = etpCost * 0.01;
    const totalCost = etpCost + gst + tcs;

    // Update the results table
    resultsTable.innerHTML = `
      <div class="table-row header">
        <div>Component</div>
        <div>Value</div>
      </div>
      <div class="table-row">
        <div>ETP Cost</div>
        <div>${etpCost.toFixed(2)}</div>
      </div>
      <div class="table-row">
        <div>GST</div>
        <div>${gst.toFixed(2)}</div>
      </div>
      <div class="table-row">
        <div>TCS</div>
        <div>${tcs.toFixed(2)}</div>
      </div>
      <div class="table-row">
        <div>Total Cost</div>
        <div>${totalCost.toFixed(2)}</div>
      </div>
    `;
  } else if (selectedValue === 'Stripper') {
    // Stripper calculations
    const stripperWeight = 25000;
    const heteroMaterialRate = 4.00;
    const materialPriceHetero = stripperWeight * heteroMaterialRate;
    const gst = materialPriceHetero * 0.18;
    const tcs = (materialPriceHetero + gst) * 0.01;
    const genetiqueToHetero = tcs + materialPriceHetero + gst;
    const pcbCharges = 1.00;
    const heteroMaterialRatePcb = heteroMaterialRate + pcbCharges;
    const apemclCharges = 0.07;
    const genetiqueMaterialCost = heteroMaterialRatePcb + apemclCharges;
    const materialPriceGenetique = genetiqueMaterialCost * stripperWeight;
    const gstGenetique = materialPriceGenetique * 0.18;
    const vpcsToGentique = materialPriceGenetique + gstGenetique;

    // Update the results table
    resultsTable.innerHTML = `
      <div class="table-row header">
        <div>Component</div>
        <div>Value</div>
      </div>
      <div class="table-row">
        <div>Stripper Weight</div>
        <div>${stripperWeight}</div>
      </div>
      <div class="table-row">
        <div>Hetero material Rate</div>
        <div>${heteroMaterialRate}</div>
      </div>
      <div class="table-row">
        <div>Material price @Hetero</div>
        <div>${materialPriceHetero.toFixed(2)}</div>
      </div>
      <div class="table-row">
        <div>GST</div>
        <div>${gst.toFixed(2)}</div>
      </div>
      <div class="table-row">
        <div>Material price+GST</div>
        <div>${(materialPriceHetero + gst).toFixed(2)}</div>
      </div>
      <div class="table-row">
        <div>TCS</div>
        <div>${tcs.toFixed(2)}</div>
      </div>
      <div class="table-row">
        <div>Genetique to Hetero</div>
        <div>${genetiqueToHetero.toFixed(2)}</div>
      </div>
      <div class="table-row">
        <div>PCB charges</div>
        <div>${pcbCharges}</div>
      </div>
      <div class="table-row">
        <div>Hetero material Rate+PCB</div>
        <div>${heteroMaterialRatePcb.toFixed(2)}</div>
      </div>
      <div class="table-row">
        <div>APEMCL charges</div>
        <div>${apemclCharges}</div>
      </div>
      <div class="table-row">
        <div>Genetique material cost</div>
        <div>${genetiqueMaterialCost.toFixed(2)}</div>
      </div>
      <div class="table-row">
        <div>Material Price @ Genetique</div>
       