const form = document.getElementById('myForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;
  const quantity = document.getElementById('quantity').value;

  const obj = {
    name,
    description,
    price,
    quantity
  };
  try {
    await axios.post('http://localhost:3000/shop', obj);
    await displayData();
    form.reset();
  } catch (error) {
    console.error(error);
  }
});


async function displayData() {
  try {
    const response = await axios.get('http://localhost:3000/shop');
    candyList = document.getElementById('candylist');
    candyList.innerHTML = '';

    const data = response.data;
    if (data != null) {
      for (let i = 0; i < data.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Candy Name : ${data[i].name}, Description: ${data[i].description}, Price: ${data[i].price} , quantity : ${data[i].quantity}`;

        candyList.appendChild(listItem);

        let buyOne = document.createElement('button');
        buyOne.textContent = 'BuyOne';
        buyOne.addEventListener('click', async function () {
          updateQuantity(1, data[i].id);
        });
        let buyTwo = document.createElement('button');
        buyTwo.textContent = 'buyTwo';
        buyTwo.addEventListener('click', async function () {
          updateQuantity(2, data[i].id);
        });
        let buyThree = document.createElement('button');
        buyThree.textContent = 'buyThree';
        buyThree.addEventListener('click', async function () {
          updateQuantity(3, data[i].id);
        });

        listItem.appendChild(buyOne);
        listItem.appendChild(buyTwo);
        listItem.appendChild(buyThree);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateQuantity(n, id) {
  n = Number(n);

  candy = await axios.get(`http://localhost:3000/shop/${id}`);
  quantity = candy.data.quantity

  if (quantity === 1 && n === 1 || quantity === 2 && n === 2 || quantity === 3 && n === 3) {
    await axios.delete(`http://localhost:3000/shop/${id}`);
    displayData();
  }
  else if (quantity < n) {
    alert(`WE HAVE ONLY ${quantity} CANDY LEFT`);
    displayData();
  }
  else {
    await axios.put(`http://localhost:3000/shop/${id}`, { n });
    displayData();
  }
}

displayData();