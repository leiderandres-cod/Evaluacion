import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

function CardProducto({ producto }) {
  return (
    <View style={styles.card}>
      <View style={styles.contenedorImagen}>
        {producto.imagen ? (
          <Image
            source={{ uri: producto.imagen }}
            style={styles.imagen}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.sinImagen}>Sin imagen</Text>
        )}
      </View>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {producto.nombre}
        </Text>
        {producto.categoria ? (
          <Text style={styles.detail} numberOfLines={1}>
            Categoría: {producto.categoria}
          </Text>
        ) : null}
        <Text style={styles.detail}>Stock: {producto.cantidad}</Text>
        <Text style={styles.precio}>Precio: ${producto.precio.toFixed(2)}</Text>
        {producto.descripcion ? (
          <Text style={styles.detail} numberOfLines={3}>
            {producto.descripcion}
          </Text>
        ) : null}
        <View style={styles.botonCarrito}>
          <Text style={styles.textoBotonCarrito}>Agregar al carrito</Text>
        </View>
      </View>
    </View>
  );
}

export default function CartProductos({ data }) {
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      columnWrapperStyle={styles.fila}
      renderItem={({ item }) => <CardProducto producto={item} />}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 8,
    paddingBottom: 100,
  },

  fila: {
    gap: 12,
  },

  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 12,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
  },

  contenedorImagen: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f5f9',
  },

  imagen: {
    width: '100%',
    height: '100%',
  },

  sinImagen: {
    color: '#64748b',
    fontSize: 14,
  },

  info: {
    padding: 12,
    gap: 6,
  },

  title: {
    color: '#173042',
    fontSize: 17,
    fontWeight: 'bold',
  },

  detail: {
    color: '#334155',
    fontSize: 14,
  },

  precio: {
    color: '#16803D',
    fontSize: 16,
    fontWeight: 'bold',
  },

  botonCarrito: {
    alignItems: 'center',
    backgroundColor: '#106a88',
    borderRadius: 8,
    marginTop: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  textoBotonCarrito: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
