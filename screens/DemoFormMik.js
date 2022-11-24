import { View,TextInput, Button } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';

export default function DemoFormMik() {

    const validSchemes = Yup.object().shape({
        //Quy định cho từng key ở initialValues trong formMik:
        username: Yup.string().min(2, 'username không được nhỏ hơn 2 ký tự')
        .max(10,'user không được lớn hơn 5 ký tự').test((value)=>{
            if(value== 'Cybersoft'){
                return true;
            }else{
                return false;
            }
        })
    })

  return (
    <Formik
        initialValues={{
            username: '',
            password: '',

        }}
        validationSchema={validSchemes}
        onSubmit={(values)=> console.log('Values')}
    >
        {
            ({errors,handleChange,handleBlur,handleSubmit,values})=>{
                //Xuất lỗi thông báo:
                console.log(errors)
                return <View>
                    <TextInput placeholder='Username' onChangeText={handleChange('username')}/>
                    <TextInput placeholder='Password' onChangeText={handleChange('password')}/>
                    <Button 
                        title='Login' 
                        onPress={handleSubmit}>
                    </Button>
                </View>
            }
        }
    </Formik>
  )
}