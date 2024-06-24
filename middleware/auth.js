import jwt from 'jsonwebtoken'

const auth =  async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const isCustomAuth =  token.length < 500

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test')  //verify our token

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token)    //For Google token
            
            req.userId = decodedData?.sub;
        }

        next();


    } catch (error) {
        console.log(error)
        res.status(401).json({message: "Unauthorised"})
    }
}

export default auth