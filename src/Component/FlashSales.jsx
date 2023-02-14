
import {  Flex ,Image,Text } from '@chakra-ui/react';
const FlashSales = (props) => {

    return(

        <div className='flashsale'>
      <Flex justifyContent="space-between" gridGap="50px" alignItems="center" className='flashsalechild'>
      {
            props.products.map((product) => (
                <div className='dataimg' >
                    
                    <div 
                    style={{
                    backgroundColor:'white',
                    paddingTop:'8px',
                    paddingLeft:'20px',
                    paddingRight:'20px',
                    paddingBottom:'8px',
                    border:'1px solid #D9D9D9',
                    borderRadius:'5px',
                    display:'flex',
                    alignItems:'center',
                    flexDirection:'column',
                    flexWrap:'wrap'
                    }} className='flashsaleImg'>

                    <Image 
                    src={product.image}
                     alt="product"
                     objectFit='cover'
                     />
                     <Text mt="5px">
                        <div style={{ display:"flex",alignItems:"center"}}>
                        <span>{product.title}</span>
                        </div>
                     </Text>

                  
                   <div>
                     <div style={{ display:"flex",alignItems:"center"}}>
                     <Text fontSize='md'>Price:</Text>
                        <strong>
                        {'$' + product.price}
                        </strong>
                     </div>
                            <button className="snipcart-add-item"
                            style={{backgroundColor:'teal', color:'white',padding:'5px 5px 5px 5px',borderRadius:'5px',fontWeight:'600px'}}
                data-item-id={product.id}
                data-item-image={product.image}
                data-item-name={product.title}
                data-item-price={product.price}
                      >
          Add to Cart
        </button>
                     </div>
                  
                    </div>

                      <div>
                      </div>

                    
                </div>
            ))
    }
      </Flex>
         
       
        </div>
    )
}




export default FlashSales;