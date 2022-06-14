txIdTag = "spanTxHash"
tag = document.getElementById(txIdTag)
hash = tag.innerHTML
link = "https://dashboard.tenderly.co/tx/mainnet/" + hash
document.getElementById(txIdTag).innerHTML = '<a href="' + link + '" target="_blank">' + hash + '</a>'


