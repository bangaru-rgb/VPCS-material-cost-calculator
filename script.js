document.addEventListener('DOMContentLoaded', () => {
    const weightInput = document.getElementById('weight');

    // Constants based on your table
    const HETERO_MATERIAL_RATE = 18.00;
    const CUSTOMS_TAX_PERCENTAGE = 0.11; // 11%
    const GST_PERCENTAGE = 0.18;       // 18%
    const TCS_PERCENTAGE = 0.01;       // 1%
    const PCB_CHARGES = 2.00;
    const APEMCL_CHARGES = 0.07;

    const formatNumber = (num) => num.toFixed(2); // Format to 2 decimal places

    const calculateCosts = () => {
        let weight = parseFloat(weightInput.value);

        if (isNaN(weight) || weight < 0) {
            weight = 0; // Default to 0 or handle error appropriately
        }

        // Display ETP Weight
        document.getElementById('display-etp-weight').textContent = formatNumber(weight);

        // Customs Tax
        const customsTax = HETERO_MATERIAL_RATE * CUSTOMS_TAX_PERCENTAGE;
        document.getElementById('display-customs-tax').textContent = formatNumber(customsTax);

        // Material cost (Hetero rate + Customs tax)
        const materialCost = HETERO_MATERIAL_RATE + customsTax;
        document.getElementById('display-material-cost').textContent = formatNumber(materialCost);

        // Material Price @Hetero (Material cost * Weight)
        const materialPriceHetero = materialCost * weight;
        document.getElementById('display-material-price-hetero').textContent = formatNumber(materialPriceHetero);

        // GST (18% of Material Price @ Hetero)
        const gstHetero = materialPriceHetero * GST_PERCENTAGE;
        document.getElementById('display-gst-hetero').textContent = formatNumber(gstHetero);

        // Material price+GST (Sum of Material Price @ Hetero and GST)
        const materialPriceGst = materialPriceHetero + gstHetero;
        document.getElementById('display-material-price-gst').textContent = formatNumber(materialPriceGst);

        // TCS (1% of (Material price+GST))
        const tcs = materialPriceGst * TCS_PERCENTAGE;
        document.getElementById('display-tcs').textContent = formatNumber(tcs);

        // Genetique to Hetero (Material price+GST+TCS)
        const genetiqueToHetero = materialPriceGst + tcs;
        document.getElementById('display-genetique-to-hetero').textContent = formatNumber(genetiqueToHetero);

        // Genetique material cost (Hetero rate + Customs tax + PCB charges + MPCL Charges)
        const genetiqueMaterialCost = HETERO_MATERIAL_RATE + customsTax + PCB_CHARGES + APEMCL_CHARGES;
        document.getElementById('display-genetique-material-cost').textContent = formatNumber(genetiqueMaterialCost);

        // Material Price @ Genetique (Genetique material cost * Weight)
        const materialPriceGenetique = genetiqueMaterialCost * weight;
        document.getElementById('display-material-price-genetique').textContent = formatNumber(materialPriceGenetique);

        // GST (18% of Material price @Genetique)
        const gstGenetique = materialPriceGenetique * GST_PERCENTAGE;
        document.getElementById('display-gst-genetique').textContent = formatNumber(gstGenetique);

        // VPCS to Genetique (Material Price @ Genetique + GST)
        const vpcsToGenetique = materialPriceGenetique + gstGenetique;
        document.getElementById('display-vpcs-to-genetique').textContent = formatNumber(vpcsToGenetique);
    };

    // Add event listener for input changes
    weightInput.addEventListener('input', calculateCosts);

    // Initial calculation when the page loads
    calculateCosts();
});