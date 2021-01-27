import axios from 'axios';
const BASEURL = "https://randomuser.me/api/?inc=image,name,phone,email,dob&results=50";

export default {
    search: function() {
        return axios.get(BASEURL);
    }
};
