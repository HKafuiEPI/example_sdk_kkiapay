import { SuccessPage } from '@/components/SuccessPage';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';

export default function SuccessScreen() {
  const params = useLocalSearchParams();
  
  console.log('SuccessScreen mounted with params:', params);
  
  const transactionId = params.transactionId as string | undefined;
  const status = params.status as string | undefined;
  const date = params.date as string | undefined;



  console.log('Parsed params:', {
    transactionId,
    status,
    date,
  });

  return (
    <>
      <Stack.Screen 
        options={{ 
          title: 'PAYMENT SUCCESSFUL',
          headerStyle: { backgroundColor: '#2196F3' },
          headerTintColor: 'white',
          headerTitleStyle: { 
            fontWeight: 'bold',
            fontSize: 18
          }
        }} 
      />
      
      <SuccessPage 
        transactionId={transactionId}
        status={status}
        date={date}
      />
    </>
  );
}