//send otp
//requirement 
const user=require('../modeles/user')
const otp=require('../modeles/otp')
const otpgenerator=require('otp-generator')
const { Await } = require('react-router-dom')
const bcrypt=require('bcrypt')

//otpfunction
const sendotp=async(request,res)=>{
try {
    const {email}=request.body

    //if user already pressent
    const check_user=user.findOne({email})
    if(check_user){
        return res.status(401).json({
            success:false,
            message:'user already registered'
        })
    }

    //otp generate
    
        var otp=otpgenerator.generate(6,{
            upperCaseAlphabets:false
            ,lowerCaseAlphabets:false,
            specialChars:false

        })
      

        //check if unique
        const check=await otp.findOne({otp})
        
        if(check){
          var otp=otpgenerator.generate(6,{
            upperCaseAlphabets:false
            ,lowerCaseAlphabets:false,
            specialChars:false

        })

        }
         console.log("otp is generated",otp)

         const otppayload={email,otp}

         //create an entry for otp 
         const otpbody=await otp.create(otppayload)
         console.log(("otp is saved "),otpbody)
        
         res.status(200).json({
            success:true,
            message:'otp sent successfully',
            otp,
         })


    } catch (error) {
        console.log(error)
        res.status(200).json({
            success:false,
            message:'otp sent unsuccessfully',
            
         })
    }

}

module.exports = sendotp;

 //signup
 exports.signup=async(req,res)=>{
    try {
        //data fetch
    const{
        firstName,
        lastname,
        email,
        password,
        consfirmpassword,
        accountType,
        contrtactNumber,
        otp
    }=req.body;


    //validation 

    if(!firstName || !lastname || !email || !password ||!consfirmpassword ||!otp){
        return res.status(403).json({
            success:false,
            message:"allfields are required"
        })
    }

     //2 password match krlo
    
     if (password!==consfirmpassword){
        return res.status(400).json(
            {
                sucess:false,
                message:'password doesnt match'

            }
        )
     }

     //check user already exsist or not 
     const existinguser=await user.findOne({email})
     if(existinguser){
        res.status(400).json({
            status:false,
            message:'user is already registered'
        });

     }

     //find most brecent otp stored for the user
     const allotp=await otp.find({email})
     const sortedotp=allotp.sort({created:-1})
     const most_recent_otp=sortedotp.limit(1)

     console.log('most recent otp is',most_recent_otp)

     //validate otp
     if(otp!==most_recent_otp){
        res.status(400).json({
            success:false,
            messsage:'otp invalid'
        })
     }
    const expire = most_recent_otp.expire;
    if (expire) {
       return res.status(400).json({
          success: false,
          message: 'otp expired'
       });
    }
    

    //hash password

    const hashedpassword=await bcrypt.hash(password,10);

    //entry created in db
    const profileDetails=await profile.create({
        gender:null,
        
    dateofbirth:null,
    about:null,
    contactNumber:null
    })

    const newUser = await user.create({
        firstName,
        lastname,
        email,
        password: hashedpassword,
        accountType,
        additionalDetails: profileDetails._id,
        courses: [],
        images: `https://api.dicebear.com/9.x/initials/svg?seed=${firstName}${lastname}`,
        courseProgess: []
    });

    return res.status(200).json({
        success: true,
        message: 'user registered successfully',
        user: newUser
    });

   } catch (error) {
       return res.status(200).json({
        success: false,
        message: 'try again',
        
    }); 
    }

 }

  //login

  exports.login=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }


  }