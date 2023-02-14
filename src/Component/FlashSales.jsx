
import { Button, Flex ,Image,Text } from '@chakra-ui/react'
const FlashSales = (props) => {

    return(

        <div className='flashsale'>
      <Flex justifyContent="space-between" gridGap="50px" alignItems="center" className='flashsalechild'>
      {
            props.dataproducts.map((dataproduct) => (
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
                    src={dataproduct.image}
                     alt="product"
                     objectFit='cover'
                     />
                     <Text mt="5px">
                        <div style={{ display:"flex",alignItems:"center"}}>
                        <span>{dataproduct.title}</span>
                        </div>
                     </Text>

                  
                   <div>
                     <div style={{ display:"flex",alignItems:"center"}}>
                     <Text fontSize='md'>Price:</Text>
                        <strong>
                        {'$' + dataproduct.price}
                        </strong>
                     </div>

                     <Button colorScheme='teal' variant='solid'>Add to Cart</Button>
                     </div>
                  
                    </div>
                </div>
            ))
    }
      </Flex>
         
       
        </div>
    )
}

export default FlashSales;