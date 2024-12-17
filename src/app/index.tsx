import { Logo } from '@/components/logo';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const SignUp: React.FC = () => {
  return (
    <SafeAreaView className='flex-1 bg-red-base'>
      <View className='flex-1 bg-red-base items-center justify-center'>
        <Logo />
      </View>
      <View className='flex-1 bg-white rounded-tl-3xl rounded-tr-2xl'>
        <Text>
          Entre para acessar suas receitas
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SignUp;