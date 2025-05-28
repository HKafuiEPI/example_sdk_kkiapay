import { ThemedView } from '@/components/ThemedView';
import { useKkiapay } from '@kkiapay-org/react-native-sdk';
import { Button } from 'react-native';

export default function TestComponent() {
  const { openKkiapayWidget } = useKkiapay();

  const openWidget = () => {
    openKkiapayWidget({
      amount: 100,
      key: 'your_api_key', // Replace with your actual Kkiapay key
      sandbox: false,
      reason: 'Payment',
    });
  }
  return (

    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <Button title="Pay now" onPress={openWidget} color="black" />
    </ThemedView >
  );
}
