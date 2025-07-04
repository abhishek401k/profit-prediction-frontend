
async function predictProfit() {
    const rd_spend = parseFloat(document.getElementById('rd_spend').value);
    const administration = parseFloat(document.getElementById('administration').value);
    const marketing_spend = parseFloat(document.getElementById('marketing_spend').value);

    const response = await fetch('YOUR_RENDER_BACKEND_URL/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rd_spend, administration, marketing_spend })
    });

    const data = await response.json();
    document.getElementById('result').innerText = `Predicted Profit: $${data.predicted_profit}`;
}
