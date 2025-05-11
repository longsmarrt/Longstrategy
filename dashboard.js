
document.addEventListener('DOMContentLoaded', () => {
  const user = sessionStorage.getItem('username') || 'Investor';
  document.getElementById('user-name').textContent = user;
  document.getElementById('referral').textContent = 'LS-' + Math.random().toString(36).substring(2, 10).toUpperCase();

  let roi = 0;
  const balanceStart = 2500000;
  const roiElem = document.getElementById('roi');
  const balanceElem = document.getElementById('balance');

  const interval = setInterval(() => {
    if (roi >= 14350.76) return clearInterval(interval);
    roi += 215;
    roiElem.textContent = `$${roi.toFixed(2)}`;
    balanceElem.textContent = `$${(balanceStart + roi).toFixed(2)}`;
  }, 60);

  const txList = document.getElementById('transactions');
  ['+ $5000 staking reward', '- $1200 withdrawal', '+ $250 referral'].forEach(tx => {
    const li = document.createElement('li');
    li.textContent = tx;
    txList.appendChild(li);
  });

  const ctx = document.getElementById('portfolioChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['BTC', 'ETH', 'ALGO', 'CosmicX'],
      datasets: [{
        label: 'Portfolio',
        data: [45, 30, 15, 10],
        backgroundColor: ['#f7931a', '#3c3c3d', '#00d2ff', '#ff33cc']
      }]
    }
  });
});
