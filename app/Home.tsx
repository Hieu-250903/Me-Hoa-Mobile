import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const popularDestinations = [
    {
      id: 1,
      name: 'Bà Nà Hills',
      image: 'https://via.placeholder.com/150x100/FF6B6B/FFFFFF?text=Ba+Na',
      description: 'Khu du lịch nổi tiếng với cáp treo dài nhất thế giới',
      distance: '25km'
    },
    {
      id: 2,
      name: 'Hội An',
      image: 'https://via.placeholder.com/150x100/4ECDC4/FFFFFF?text=Hoi+An',
      description: 'Phố cổ UNESCO với kiến trúc độc đáo',
      distance: '30km'
    },
    {
      id: 3,
      name: 'Ngũ Hành Sơn',
      image: 'https://via.placeholder.com/150x100/45B7D1/FFFFFF?text=Ngu+Hanh',
      description: 'Núi đá vôi với hang động và chùa chiền',
      distance: '8km'
    },
    {
      id: 4,
      name: 'Bán đảo Sơn Trà',
      image: 'https://via.placeholder.com/150x100/96CEB4/FFFFFF?text=Son+Tra',
      description: 'Ngọn hải đăng và view toàn cảnh Đà Nẵng',
      distance: '10km'
    }
  ];

  const vehicleTypes = [
    { id: 1, name: '4 chỗ', icon: 'car' as const, price: '500k/ngày' },
    { id: 2, name: '7 chỗ', icon: 'car-sport' as const, price: '800k/ngày' },
    { id: 3, name: '16 chỗ', icon: 'bus' as const, price: '1.2M/ngày' },
    { id: 4, name: '29 chỗ', icon: 'bus' as const, price: '2M/ngày' },
    { id: 5, name: '45 chỗ', icon: 'bus' as const, price: '3M/ngày' }
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Me Hoa Travel</Text>
        <Text style={styles.headerSubtitle}>Đặt xe du lịch Đà Nẵng</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="search" size={24} color="#007AFF" />
          <Text style={styles.actionText}>Tìm xe</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="map" size={24} color="#007AFF" />
          <Text style={styles.actionText}>Bản đồ</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="list" size={24} color="#007AFF" />
          <Text style={styles.actionText}>Đơn hàng</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="star" size={24} color="#007AFF" />
          <Text style={styles.actionText}>Đánh giá</Text>
        </TouchableOpacity>
        
        <Link href="/driver" style={styles.actionButton}>
          <Ionicons name="car" size={24} color="#007AFF" />
          <Text style={styles.actionText}>Tài xế</Text>
        </Link>
      </View>

      {/* Vehicle Types */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Loại xe</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.vehicleScroll}>
          {vehicleTypes.map((vehicle) => (
            <TouchableOpacity key={vehicle.id} style={styles.vehicleCard}>
              <Ionicons name={vehicle.icon} size={32} color="#007AFF" />
              <Text style={styles.vehicleName}>{vehicle.name}</Text>
              <Text style={styles.vehiclePrice}>{vehicle.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Popular Destinations */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Địa điểm nổi bật</Text>
        {popularDestinations.map((destination) => (
          <TouchableOpacity key={destination.id} style={styles.destinationCard}>
            <Image source={{ uri: destination.image }} style={styles.destinationImage} />
            <View style={styles.destinationInfo}>
              <Text style={styles.destinationName}>{destination.name}</Text>
              <Text style={styles.destinationDescription}>{destination.description}</Text>
              <View style={styles.destinationMeta}>
                <Ionicons name="location" size={16} color="#666" />
                <Text style={styles.destinationDistance}>{destination.distance}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Auth Buttons */}
      <View style={styles.authSection}>
        <Link href="/login" style={styles.authButton}>
          <Ionicons name="log-in" size={20} color="white" />
          <Text style={styles.authButtonText}>Đăng nhập</Text>
        </Link>
        
        <Link href="/register" style={[styles.authButton, styles.registerButton]}>
          <Ionicons name="person-add" size={20} color="white" />
          <Text style={styles.authButtonText}>Đăng ký</Text>
        </Link>
      </View>

      {/* Features */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tính năng chính</Text>
        <View style={styles.featuresGrid}>
          <View style={styles.featureItem}>
            <Ionicons name="time" size={24} color="#007AFF" />
            <Text style={styles.featureText}>Theo dõi hành trình</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="card" size={24} color="#007AFF" />
            <Text style={styles.featureText}>Thanh toán đa dạng</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="shield-checkmark" size={24} color="#007AFF" />
            <Text style={styles.featureText}>An toàn & Bảo mật</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="star" size={24} color="#007AFF" />
            <Text style={styles.featureText}>Đánh giá & Phản hồi</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionButton: {
    alignItems: 'center',
    padding: 10,
  },
  actionText: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
  section: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  vehicleScroll: {
    flexDirection: 'row',
  },
  vehicleCard: {
    alignItems: 'center',
    padding: 15,
    marginRight: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    minWidth: 80,
  },
  vehicleName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 5,
  },
  vehiclePrice: {
    fontSize: 12,
    color: '#007AFF',
    marginTop: 2,
  },
  destinationCard: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    overflow: 'hidden',
  },
  destinationImage: {
    width: 80,
    height: 80,
  },
  destinationInfo: {
    flex: 1,
    padding: 12,
  },
  destinationName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  destinationDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  destinationMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  destinationDistance: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  authSection: {
    margin: 15,
    gap: 10,
  },
  authButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    gap: 8,
  },
  registerButton: {
    backgroundColor: '#34C759',
  },
  authButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureItem: {
    width: '48%',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 10,
  },
  featureText: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
    textAlign: 'center',
    fontWeight: '500',
  },
});
