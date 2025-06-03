import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useKkiapay } from '@kkiapay-org/react-native-sdk';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Button, View } from 'react-native';

export default function TestComponent() {
  const { openKkiapayWidget, addSuccessListener, addFailedListener, addPendingListener } = useKkiapay();
  useEffect(() => {
    addSuccessListener((data: any) => {
      console.log('✅ Payment success:', data);
      
      const transactionId = data?.transactionId || `txn_${Date.now()}`;
      console.log('Transaction ID:', transactionId);
      router.replace(`/success?transactionId=${transactionId}&status=COMPLETED&date=${new Date().toISOString()}` as any);
      return;
    });

    addFailedListener(() => {
      console.log('❌ Payment failed');
      router.replace('/success?status=FAILED' as any);
      return;
    });

    addPendingListener(() => {
      console.log('⏳ Payment pending');
    });
  }, [addSuccessListener, addFailedListener, addPendingListener]);

  const openWidget = () => {
    openKkiapayWidget({
      amount: 1000,
      key: 'your_kkiapay_key_here', // Replace with your actual Kkiapay key
      sandbox: true,
      reason: 'Test Payment',
    });
  };
  
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <View style={{ gap: 20, alignItems: 'center' }}>
        <ThemedText type="title" style={{ marginBottom: 20 }}>
          Test Kkiapay SDK
        </ThemedText>
        
        <Button title="Payer maintenant" onPress={openWidget} color="black" />        
        <ThemedText style={{ textAlign: 'center', fontSize: 12, opacity: 0.7, marginTop: 10 }}>
          Utilisez les boutons de test pour vérifier la navigation
        </ThemedText>
      </View>
    </ThemedView >
  );
}
