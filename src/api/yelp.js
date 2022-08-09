import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 7yac5CEWUrL0HkfGgpHj3j2QBFb9YqKuT82ok5-3F2QmMKZch-mIl5YNaQZaH9DAIfUGga1TkCGQMwP1Si-6L8FOEgQYqWXfszvHnCS-0-o4McSU5ouZovR2ow3vYXYx',
    }
})
