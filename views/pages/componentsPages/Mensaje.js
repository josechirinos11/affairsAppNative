import React from 'react';
import { Portal, Dialog, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Mensaje = ({ visible, onDismiss, textoMensaje, theme }) => {
  const styles = StyleSheet.create({
    containerDialog: {
        top:200,
        textAlign: 'center',
        justifyContent: 'center',
           alignItems: 'center',
    },
  });

  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={onDismiss}
        style={[styles.containerDialog, { backgroundColor: theme.colors.onPrimary }]}
      >
        <Dialog.Content>
          <Text variant="bodyMedium">{textoMensaje}</Text>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default Mensaje;
