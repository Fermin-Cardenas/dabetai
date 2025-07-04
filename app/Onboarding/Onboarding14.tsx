import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Card, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function HealthAppsConnectionScreen() {
  const router = useRouter();

  const handleConnectApps = () => {
    console.log('Conectar aplicaciones de salud');
    router.push('/Onboarding/Onboarding15');
  };

  const handleSkip = () => {
    console.log('Saltar por ahora');
    router.push('/Onboarding/Onboarding15');
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Card style={styles.card}>
            <Card.Content style={{ padding: 0, marginBottom: 0 }}>
              <View style={{ paddingHorizontal: 0 }}>
                <Text style={styles.labelTitle}>Conecta tus aplicaciones de seguimiento de salud</Text>
                <Text style={styles.subtitle}>
                  Permite que tus aplicaciones de monitoreo de salud se conecten con dabetai para impulsar tu monitoreo y mejorar la precisión de tus predicciones.
                </Text>
              </View>
            </Card.Content>

            <Card.Content style={{ marginTop: 430, padding: 0, alignItems: 'center' }}>
              <Button 
                mode="contained" 
                style={styles.primaryButton} 
                labelStyle={styles.primaryButtonText}
                onPress={handleConnectApps}
              >
                Conectar aplicaciones
              </Button>
              
              <Button 
                mode="outlined" 
                style={styles.secondaryButton} 
                labelStyle={styles.secondaryButtonText}
                onPress={handleSkip}
              >
                Saltar por ahora
              </Button>
            </Card.Content>
          </Card>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 0,
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#f1f5f9',
  },
  card: {
    width: '100%',
    padding: 0,
    borderRadius: 8,
    backgroundColor: '#f1f5f9',
    elevation: 0,
    shadowColor: 'transparent',
    borderWidth: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  labelTitle: {
    marginBottom: 2,
    color: '#314158',
    fontSize: 26,
    fontFamily: 'Source Sans 3',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: 32,
    color: '#62748E',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Source Sans 3',
    paddingLeft: 0,
    paddingRight: 0,
  },
  primaryButton: {
    width: 343,
    height: 44,
    borderRadius: 28.17,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 24,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  secondaryButton: {
    width: 343,
    height: 44,
    borderRadius: 28.17,
    backgroundColor: '#f1f5f9',
    borderColor: '#2196F3',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  secondaryButtonText: {
    color: '#62748E',
    fontSize: 16,
    fontWeight: '500',
  },
});