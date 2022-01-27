import Logout from "./Footer.jsx";

function AddBill() {
  return (
    <div className="App-Page">
      <h2>Shop Keeper Utility Application</h2>
      <h4>Add Bill</h4>
      <span>
        <label>Item Name   :</label>
        <input type="input" className="input" id="name" required></input>
        <p></p>
        <label>Quantity    :  </label>
        <input type="number" className="input" id="count" required></input>
        <p></p>
        <label>Cost Price Per Item :  </label>
        <input type="number" className="input" id="cost" required></input>
        <p></p>
        <label>Selling Price Per Item:  </label>
        <input type="number" className="input" id="sell" required></input>

      </span>

      <p></p>
      <button className="button" onClick={add}>Add</button>
      <p></p>
      <label className="error" id="error"></label>
      <p></p>
      <span>
        <table className="table" id="table">
          <thead id="thead">
            <th>Item name</th>
            <th>Quantity</th>
            <th>Price Per Item</th>
            <th>Total Price</th>
            <th>Action</th>
          </thead>
          <tbody id="tbody">

          </tbody>
        </table>
      </span>
      <p></p>
      Total Bill : <label id="totalAmount"></label>
      <p></p>
      <label className="error" id="error2"></label>
      <p></p>
      <button className="button" onClick={submit}>Invoice</button>
      <p></p>
      <Logout></Logout>
    </div>

  );
}

function add() {
  var name = document.getElementById("name").value;
  var count = document.getElementById("count").value;
  var price = document.getElementById("sell").value;
  var totalPrice = count * price;
  if (name !== "" && count !== "" && price !== "") {
    document.getElementById("error").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    var tag = document.createElement("tr");
    var size = document.getElementsByTagName("tr").length;
    tag.setAttribute("id", size)
    var element = document.getElementById("tbody");
    element.appendChild(tag);

    var tag = document.createElement("td");
    var text = document.createTextNode(name);
    tag.appendChild(text);
    var element = document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length - 1];
    element.appendChild(tag);

    var tag = document.createElement("td");
    var text = document.createTextNode(count);
    tag.appendChild(text);
    var element = document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length - 1];
    element.appendChild(tag);

    var tag = document.createElement("td");
    var text = document.createTextNode(price);
    tag.appendChild(text);
    var element = document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length - 1];
    element.appendChild(tag);

    var tag = document.createElement("td");
    var text = document.createTextNode(totalPrice);
    tag.appendChild(text);
    tag.setAttribute("class", "amount");
    var element = document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length - 1];
    element.appendChild(tag);

    var tag = document.createElement("button");
    var text = document.createTextNode("X");
    tag.appendChild(text);
    tag.setAttribute("class", "button");
    tag.setAttribute("onClick", "{document.getElementById(" + size + ").remove()}");
    var element = document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length - 1];
    element.appendChild(tag);

    var elements = document.getElementsByClassName("amount");
    var amount = 0.0;
    for (var index = 0; index < elements.length; index++) {
      amount = amount + parseFloat(elements[index].innerHTML);

    }

    document.getElementById("totalAmount").innerHTML = amount;
  }
  else {
    document.getElementById("error").innerHTML = "Fill the item details to add!!";
  }



}

function submit() {
  if (document.getElementsByTagName("tr").length === 0) {
    document.getElementById("error2").innerHTML = "Add atleast an Item to invoice!!";
  }
  else {
    document.getElementById("error2").innerHTML = "Add atleast an Item to invoice!!";
    var elements = document.getElementsByClassName("amount");
    var amount = 0.0;
    for (var index = 0; index < elements.length; index++) {
      amount = amount + parseFloat(elements[index].innerHTML);

    }
    alert("Invoice generated for " + amount);
    window.location.href = "/home";
  }

}

export default AddBill;