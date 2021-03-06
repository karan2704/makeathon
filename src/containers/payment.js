import React from 'react'
import Web3 from "web3"
import Web3Connect from "web3connect"
import Portis from '@portis/web3';

import Backdrop from '../components/UI/backdrop/backdrop';
// "cdb8a7bb-2dfb-4e06-a9c2-28cd4a9e58f0"
 


const Payment = async() => {      

   
    const providerOptions = {
        portis: {
          package: Portis, 
          options: {
            id: "cdb8a7bb-2dfb-4e06-a9c2-28cd4a9e58f0" 
          }
        }
      };
          
      const web3Connect = new Web3Connect.Core({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
      });
       
      const provider = await web3Connect.connect();
       
      const web = new Web3(provider);

      console.log(provider._portis);
    

          return(
              <div>
                  <Backdrop show={true}/>
              </div>
          )
}

export default Payment