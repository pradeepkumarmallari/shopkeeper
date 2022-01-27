import Logout from "./Footer.jsx";

function AddItems() {
    return (
      <div className="App-Page">
        <h2>Shop Keeper Utility Application</h2>
        <h4>Add Items</h4>
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
                    <th>Cost Price Per Item</th>
                    <th>Selling Price Per Item</th>
                    <th>Action</th>
                </thead>
                <tbody id="tbody">

                </tbody>
            </table>
        </span>
        <p></p>
        <label className="error" id="error2"></label>
        <p></p> 
        <button className="button" onClick={submit}>Submit</button>     
        <p></p> 
        <Logout></Logout>
      </div>

    );
  }

  function add(){
      var name=document.getElementById("name").value;
      var count=document.getElementById("count").value;
      var cost=document.getElementById("cost").value;
      var sell=document.getElementById("sell").value;
      if(name!=="" && count!=="" && cost!=="" && sell!==""){
        document.getElementById("error").innerHTML="";
        document.getElementById("error2").innerHTML="";
        var tag=document.createElement("tr");
        var size=document.getElementsByTagName("tr").length;
        tag.setAttribute("id",size)
        var element=document.getElementById("tbody");
        element.appendChild(tag);
       
        var tag=document.createElement("td");
        var text=document.createTextNode(name);
        tag.appendChild(text);
        var element=document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length-1];
        element.appendChild(tag);

        var tag=document.createElement("td");
        var text=document.createTextNode(count);
        tag.appendChild(text);
        var element=document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length-1];
        element.appendChild(tag);

        var tag=document.createElement("td");
        var text=document.createTextNode(cost);
        tag.appendChild(text);
        var element=document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length-1];
        element.appendChild(tag);

        var tag=document.createElement("td");
        var text=document.createTextNode(sell);
        tag.appendChild(text);
        var element=document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length-1];
        element.appendChild(tag);

        var tag=document.createElement("button");
        var text=document.createTextNode("X");
        tag.appendChild(text);
        tag.setAttribute("class","button");
        tag.setAttribute("onClick","{document.getElementById("+size+").remove()}");
        var element=document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length-1];
        element.appendChild(tag);
      }
      else{
        document.getElementById("error").innerHTML="Fill the item details to add!!";
      }
      
  }

  function submit(){
    if(document.getElementsByTagName("tr").length===0){
      document.getElementById("error2").innerHTML="Add atleast an Item to submit!!";
    }
    else{
      document.getElementById("error2").innerHTML="";
      alert("Items Added Succesfully!!")  
      window.location.href = "/home";
    }
    
  }

  function removeElement(row){
    var item=document.getElementById(row);
    item.remove();
  }
  
  export default AddItems;