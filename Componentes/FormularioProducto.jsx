import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Modal,
  Alert,
  Keyboard,
} from 'react-native';

export default function FormularioProducto({ visible, onClose, onSave }) {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');

  const guardarProducto = () => {
    if (
      nombre.trim() === '' ||
      precio.trim() === '' ||
      cantidad.trim() === ''
    ) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }

    const producto = {
      id: Date.now().toString(),
      nombre: nombre.trim(),
      categoria: categoria.trim(),
      precio: Number(precio),
      cantidad: Number(cantidad),
      descripcion: descripcion.trim(),
      imagen: imagen,
    };

    onSave(producto);

    setNombre('');
    setCategoria('');
    setPrecio('');
    setCantidad('');
    setDescripcion('');
    setImagen('');

    onClose();
  };

  const cerrarFormulario = () => {
    Keyboard.dismiss();
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={cerrarFormulario}
    >
      <View style={styles.fondo}>
        <Pressable
          accessibilityLabel="Ocultar teclado"
          onPress={Keyboard.dismiss}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.formulario}>
          <Text style={styles.titulo}>Agregar producto</Text>

          <TextInput
            placeholder="Nombre del producto"
            value={nombre}
            onChangeText={setNombre}
            style={styles.input}
          />

          <TextInput
            placeholder="Categoría del producto"
            value={categoria}
            onChangeText={setCategoria}
            style={styles.input}
          />

          <TextInput
            placeholder="Precio"
            value={precio}
            onChangeText={setPrecio}
            keyboardType="decimal-pad"
            style={styles.input}
          />

          <TextInput
            placeholder="Cantidad o stock"
            value={cantidad}
            onChangeText={setCantidad}
            keyboardType="number-pad"
            style={styles.input}
          />

          <TextInput
            placeholder="Descripción del producto"
            value={descripcion}
            onChangeText={setDescripcion}
            style={[styles.input, styles.descripcionInput]}
            multiline
            textAlignVertical="top"
          />

          <TextInput
            placeholder="URL de la imagen"
            value={imagen}
            onChangeText={setImagen}
            style={styles.input}
          />

          <View style={styles.botones}>
            <Pressable
              style={styles.cancelar}
              onPress={cerrarFormulario}
            >
              <Text style={styles.textoBoton}>Cancelar</Text>
            </Pressable>

            <Pressable
              style={styles.boton}
              onPress={guardarProducto}
            >
              <Text style={styles.textoBoton}>Guardar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    position: 'relative',
  },

  formulario: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },

  descripcionInput: {
    minHeight: 90,
  },

  botones: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },

  boton: {
    backgroundColor: '#106a88',
    padding: 12,
    borderRadius: 8,
  },

  cancelar: {
    backgroundColor: '#64748b',
    padding: 12,
    borderRadius: 8,
  },

  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
