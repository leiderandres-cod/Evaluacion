import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import BotonMas from './Componentes/BotonMas';
import CartProductos from './Componentes/CartProductos';
import FormularioProducto from './Componentes/FormularioProducto';

export default function App() {
  const [visible, setVisible] = useState(false);
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  // Guardar producto
  const guardarProducto = (producto) => {
    setProductos((productosActuales) => [
      ...productosActuales,
      producto,
    ]);

    setBusqueda('');
    setVisible(false);
  };

  // Buscar productos
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre
      .toLowerCase()
      .includes(busqueda.trim().toLowerCase())
  );

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/474x/38/e9/c0/38e9c06be4cfc5800d62da55d395e56d.jpg?nii=t',
      }}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar style="auto" />

      {/* Encabezado */}
      <View style={styles.head}>
        <Text style={styles.textHead}>
          Lista de Productos
        </Text>
      </View>

      {/* Buscador */}
      <View style={styles.buscar}>
        <TextInput
          accessibilityLabel="Buscar productos"
          value={busqueda}
          onChangeText={setBusqueda}
          placeholder="Buscar producto..."
          placeholderTextColor="#176adf"
          style={styles.textoBuscar}
        />
      </View>

      {/* Lista de productos */}
      {productos.length === 0 ? (
        <View style={styles.vacio}>
          <Text style={styles.textoVacio}>
            No hay productos. Pulsa + para agregar uno.
          </Text>
        </View>
      ) : productosFiltrados.length === 0 ? (
        <View style={styles.vacio}>
          <Text style={styles.textoVacio}>
            No se encontraron productos.
          </Text>
        </View>
      ) : (
        <CartProductos data={productosFiltrados} />
      )}

      {/* Botón para abrir el formulario */}
      <BotonMas onPress={() => setVisible(true)} />

      {/* Formulario para registrar productos */}
      <FormularioProducto
        visible={visible}
        onClose={() => setVisible(false)}
        onSave={guardarProducto}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  head: {
    backgroundColor: '#708090',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textHead: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },

  vacio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  textoVacio: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buscar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    elevation: 3,
  },

  textoBuscar: {
    flex: 1,
    height: '100%',
    color: '#173042',
    fontSize: 16,
  },
});
