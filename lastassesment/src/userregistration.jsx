import React from 'react';

function Userregistration(props) {
    return (
        <>
        <body>
            <form action=""  id='user-form' method="get">
                <table>
                    <tr>
                        <td><label> First Name:</label></td>
                        <td><input type="text" id='firstname' className='in_size' name='field' autocomplete="off" autofocus="autofocus" required /></td>
                    </tr>
                    <tr>
                        <td><label> Last Name:</label></td>
                        <td><input type="text" id='lastname' className='in_size' name='field' autocomplete="off" autofocus="autofocus" required /></td>
                    </tr>
                    <tr>
                        <td><label> Email:</label></td>
                        <td><input type="text" id='email' className='in_size' name='field' autocomplete="off" autofocus="autofocus" required /></td>
                    </tr>
                    <tr>
                         <td><label>Password:</label></td>
                        <td><input type="password" id="password" class="in_size" autocomplete="off" autofocus="autofocus" required/>
                        </td>
                    </tr>
                    <tr>
                         <td><label>Retype Password:</label></td>
                        <td><input type="Password" id="retypepassword" class="in_size" autocomplete="off" autofocus="autofocus" required/>
                        </td>
                    </tr>
                    <tr>
                <td><label>Phone Number:</label></td>
                <td><input type="tel" id="phonenumber" name="Phone Number" class="in_size" autocomplete="off"  autofocus="autofocus" required/> </td>
            </tr>
            <tr>
                <td><label >Address:</label></td>
                <td><textarea name="address" id="address" class="in_size" autocomplete="off" autofocus="autofocus" required></textarea></td>
            </tr>
            <tr>
                <td> <label>Town:</label></td>
                <td> <input type="text" id="town" class="in_size" autocomplete="off" autofocus="autofocus" required/>
                   </td>
            </tr>
            <tr>                
                <td> <label >Postcode\Zip:</label></td>
                <td> <input type="text" id="pin" class="in_size"autocomplete="off" autofocus="autofocus" required/> </td>
            </tr>
            <tr>
            <td> <label>Country:</label></td>
                <td> <input type="text" id="country" class="in_size"autocomplete="off" autofocus="autofocus" required/> </td>

            </tr>
                </table>
            </form>

        </body>
        </>
    );
}

export default Userregistration;