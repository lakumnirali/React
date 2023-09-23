import React from 'react'; 


// *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }
// form{
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* background-color: rgb(228, 59, 102); */
//   background-image: url(https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&w=1815&h=1020.9375&fit=crop&crop=faces);
//   background-repeat: no-repeat;
// }
// table{
//     width: 60%;
//     padding: 60px;
// }
// tr{
//     border-bottom: 1px solid black;
// }

// td{
//     width: 5%;
//     padding: 10px 20px;
// }
// .in_size{
//     width: 300px;
//     padding: 3px;
// }
// #btn{
//     padding: 10px;
//     background-color: green;
//     color: white;
//     cursor: pointer;
//     border: none;
//     border-radius: 5px;
// }
// #address{
//     height: 100px;
// }


const Moduleeleven = () => {
    return (
        <div>
            <form action="" id="user-form" method="get" >
                <table>
                    <tr>
                        <td><label>First Name:</label></td>
                        <td><input type="text" id="firstname" className="in_size" name="field" autocomplete="off" autofocus="autofocus" required /> <br /><span id="firstNameCheck"></span></td>
                    </tr>
                    <tr>
                        <td><label>Last Name :</label></td>
                        <td><input type="text" id="lastname" className="in_size" name="field" autocomplete="off" autofocus="autofocus" required /> <br /><span id="lastNameCheck"></span></td>
                    </tr>
                    <tr>
                        <td><label>Email:</label></td>
                        <td><input type="text" id="email" className="in_size" name="field" autocomplete="off" autofocus="autofocus" required /> <br /><span id="emailCheck"></span></td>
                    </tr>
                    <tr>
                        <td><label>Mobile:</label></td>
                        <td><input type="text" id="mobile" className="in_size" name="field" autocomplete="off" autofocus="autofocus" required /> <br /><span id="mobileCheck"></span></td>
                    </tr>
                    <tr>
                        <td><label>Mobile:</label></td>
                        <td><input type="radio" name="gender" />Male  &nbsp; <input type="radio" name="gender" />Female &nbsp;<span id="genderCheck"></span></td>
                    </tr>
                    <tr>
                        <td><label >Date Of Birth:</label></td>
                        <td><input type="date" class="in_size" /><br /> </td>

                    </tr>
                    <tr>
                        <td><label >Address:</label></td>
                        <td><textarea name="address" id="address" class="in_size" autocomplete="off" autofocus="autofocus" required></textarea><br /> <span id="addressCheck"></span></td>
                    </tr>
                    <tr>
                        <td> <label>City:</label></td>
                        <td> <input type="text" id="city" class="in_size" autocomplete="off" autofocus="autofocus" required />
                            <br /><span id="cityCheck"></span></td>
                    </tr>
                    <tr>
                <td> <label >Area Pin:</label></td>
                <td> <input type="text" id="pin" class="in_size"autocomplete="off" autofocus="autofocus" required/> 
                    <br/>
                <span id="pinCheck"></span></td>
            </tr>
            <tr>
                <td> <label >State:</label></td>
                <td> <input type="text" id="state" class="in_size"autocomplete="off" autofocus="autofocus" required/><br/>
                <span id="stateCheck"  ></span></td>
            </tr>
            <tr>
                <td> <label >Qualification</label></td>
                <td> <select name="Qualification" id="Qualification" >
                    <option value="Select Qualification">Select Qualification </option>
                    <option value="B.com">B.com</option>
                    <option value="B.sc">B.sc</option>
                    <option value="B.E">B.E</option>
                    <option value="B.A">B.A</option>
                    <option value="">B.A</option>
                </select></td>
            </tr>
            <tr>
                <td><label class="specialization" >Specialization</label></td>
                <td>
                    <input type="radio" name="box" />Computer Science <br/>
                    <input type="radio" name="box" />Information Technology <br/>
                    <input type="radio" name="box" />Computer Architecture <br/>
                    <input type="radio" name="box" />Tele Communication
                </td>
            </tr>
            <tr>
                <td><label>Password:</label></td>
                <td><input type="password" id="password" class="in_size" autocomplete="off" autofocus="autofocus" required/><br/>
                <span id="pswCheck"></span></td>
            </tr>
            <tr>
                <td>
                    <input type="submit"  onclick=" return validation()"value="Registered" id="btn"/>
                </td>
            </tr>
                </table>
            </form>
        </div>
    );
};

export default Moduleeleven;