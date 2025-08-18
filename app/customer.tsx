import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Customer() {
  const customerInfo = {
    name: 'Nguyễn Mẫn Hạnh Quyên',
    email: 'mai.nguyen@email.com',
    phone: '0905 123 456',
    avatar: 'https://via.placeholder.com/80x80/FF6B6B/FFFFFF?text=KH',
    memberSince: 'Tháng 3, 2024',
    totalTrips: 24,
    totalSpent: '8.5M',
    loyaltyPoints: 1250
  };

  const recentTrips = [
    {
      id: 1,
      from: 'Sân bay Đà Nẵng',
      to: 'Hội An',
      date: 'Hôm nay, 14:30',
      status: 'Đang di chuyển',
      amount: '800.000đ',
      driver: 'Nguyễn Văn Tài',
      vehicle: 'Toyota Innova 7 chỗ'
    },
    {
      id: 2,
      from: 'Bà Nà Hills',
      to: 'Đà Nẵng',
      date: 'Hôm qua, 16:00',
      status: 'Hoàn thành',
      amount: '1.200.000đ',
      driver: 'Trần Văn Bình',
      vehicle: 'Ford Transit 16 chỗ'
    },
    {
      id: 3,
      from: 'Ngũ Hành Sơn',
      to: 'Bán đảo Sơn Trà',
      date: '2 ngày trước, 09:15',
      status: 'Hoàn thành',
      amount: '600.000đ',
      driver: 'Lê Văn Cường',
      vehicle: 'Toyota Vios 4 chỗ'
    }
  ];

  const savedAddresses = [
    { id: 1, name: 'Nhà riêng', address: '123 Nguyễn Văn Linh, Hải Châu, Đà Nẵng', type: 'home' },
    { id: 2, name: 'Công ty', address: '456 Lê Duẩn, Thanh Khê, Đà Nẵng', type: 'work' },
    { id: 3, name: 'Sân bay', address: 'Sân bay Quốc tế Đà Nẵng', type: 'airport' }
  ];

  const paymentMethods = [
    { id: 1, type: 'card', name: 'Visa ****1234', isDefault: true },
    { id: 2, type: 'momo', name: 'MoMo - 0905 123 456', isDefault: false },
    { id: 3, type: 'zalo', name: 'ZaloPay - 0905 123 456', isDefault: false }
  ];

  const menuItems = [
    { id: 1, title: 'Thông tin cá nhân', icon: 'person', color: '#007AFF' },
    { id: 2, title: 'Lịch sử chuyến đi', icon: 'time', color: '#34C759' },
    { id: 3, title: 'Địa chỉ đã lưu', icon: 'location', color: '#FF9500' },
    { id: 4, title: 'Phương thức thanh toán', icon: 'card', color: '#5856D6' },
    { id: 5, title: 'Đánh giá & Phản hồi', icon: 'star', color: '#FF3B30' },
    { id: 6, title: 'Cài đặt thông báo', icon: 'notifications', color: '#AF52DE' },
    { id: 7, title: 'Bảo mật & Quyền riêng tư', icon: 'shield', color: '#FF2D92' },
    { id: 8, title: 'Trợ giúp & Hỗ trợ', icon: 'help-circle', color: '#5AC8FA' }
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Link href="/Home" style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Link>
          <Text style={styles.headerTitle}>Hồ sơ</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Ionicons name="settings" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image source={{ uri: customerInfo.avatar }} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.customerName}>{customerInfo.name}</Text>
          <Text style={styles.customerEmail}>{customerInfo.email}</Text>
          <Text style={styles.customerPhone}>{customerInfo.phone}</Text>
          <Text style={styles.memberSince}>Thành viên từ {customerInfo.memberSince}</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="create" size={20} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="car" size={24} color="#007AFF" />
          <Text style={styles.statValue}>{customerInfo.totalTrips}</Text>
          <Text style={styles.statTitle}>Chuyến đi</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="wallet" size={24} color="#34C759" />
          <Text style={styles.statValue}>{customerInfo.totalSpent}</Text>
          <Text style={styles.statTitle}>Tổng chi tiêu</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="star" size={24} color="#FF9500" />
          <Text style={styles.statValue}>{customerInfo.loyaltyPoints}</Text>
          <Text style={styles.statTitle}>Điểm tích lũy</Text>
        </View>
      </View>

      {/* Recent Trips */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Chuyến đi gần đây</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        
        {recentTrips.map((trip) => (
          <View key={trip.id} style={styles.tripCard}>
            <View style={styles.tripHeader}>
              <Text style={styles.tripDate}>{trip.date}</Text>
              <View style={styles.tripStatus}>
                <View style={[styles.statusDot, { backgroundColor: trip.status === 'Hoàn thành' ? '#34C759' : '#FF9500' }]} />
                <Text style={styles.statusText}>{trip.status}</Text>
              </View>
            </View>
            
            <View style={styles.tripRoute}>
              <View style={styles.routePoint}>
                <Ionicons name="location" size={16} color="#007AFF" />
                <Text style={styles.routeText}>{trip.from}</Text>
              </View>
              <View style={styles.routeLine} />
              <View style={styles.routePoint}>
                <Ionicons name="location" size={16} color="#FF3B30" />
                <Text style={styles.routeText}>{trip.to}</Text>
              </View>
            </View>
            
            <View style={styles.tripDetails}>
              <Text style={styles.driverInfo}>Tài xế: {trip.driver}</Text>
              <Text style={styles.vehicleInfo}>Xe: {trip.vehicle}</Text>
              <Text style={styles.tripAmount}>{trip.amount}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Saved Addresses */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Địa chỉ đã lưu</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Thêm mới</Text>
          </TouchableOpacity>
        </View>
        
        {savedAddresses.map((address) => (
          <TouchableOpacity key={address.id} style={styles.addressCard}>
            <View style={styles.addressIcon}>
              <Ionicons 
                name={address.type === 'home' ? 'home' : address.type === 'work' ? 'business' : 'airplane'} 
                size={20} 
                color="#007AFF" 
              />
            </View>
            <View style={styles.addressInfo}>
              <Text style={styles.addressName}>{address.name}</Text>
              <Text style={styles.addressText}>{address.address}</Text>
            </View>
            <TouchableOpacity style={styles.addressAction}>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>

      {/* Payment Methods */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Phương thức thanh toán</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Thêm mới</Text>
          </TouchableOpacity>
        </View>
        
        {paymentMethods.map((method) => (
          <TouchableOpacity key={method.id} style={styles.paymentCard}>
            <View style={styles.paymentIcon}>
              <Ionicons 
                name={method.type === 'card' ? 'card' : method.type === 'momo' ? 'phone-portrait' : 'logo-whatsapp'} 
                size={20} 
                color="#007AFF" 
              />
            </View>
            <View style={styles.paymentInfo}>
              <Text style={styles.paymentName}>{method.name}</Text>
              {method.isDefault && <Text style={styles.defaultBadge}>Mặc định</Text>}
            </View>
            <TouchableOpacity style={styles.paymentAction}>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>

      {/* Menu Items */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cài đặt & Tùy chọn</Text>
        
        {menuItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.menuItem}>
            <View style={[styles.menuIcon, { backgroundColor: item.color + '20' }]}>
              <Ionicons name={item.icon} size={20} color={item.color} />
            </View>
            <Text style={styles.menuTitle}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout Button */}
      <View style={styles.logoutSection}>
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out" size={20} color="#FF3B30" />
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>
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
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  backButton: {
    padding: 5,
  },
  settingsButton: {
    padding: 5,
  },
  profileSection: {
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  customerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  customerEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  customerPhone: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  memberSince: {
    fontSize: 12,
    color: '#999',
  },
  editButton: {
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 15,
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAllText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
  tripCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  tripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tripDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  tripStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 5,
  },
  statusText: {
    fontSize: 12,
    color: '#666',
  },
  tripRoute: {
    marginBottom: 10,
  },
  routePoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  routeText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  routeLine: {
    width: 2,
    height: 20,
    backgroundColor: '#ddd',
    marginLeft: 7,
    marginBottom: 5,
  },
  tripDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  driverInfo: {
    fontSize: 12,
    color: '#666',
  },
  vehicleInfo: {
    fontSize: 12,
    color: '#666',
  },
  tripAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  addressCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 10,
  },
  addressIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  addressInfo: {
    flex: 1,
  },
  addressName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  addressText: {
    fontSize: 12,
    color: '#666',
  },
  addressAction: {
    padding: 5,
  },
  paymentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 10,
  },
  paymentIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  paymentInfo: {
    flex: 1,
  },
  paymentName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  defaultBadge: {
    fontSize: 10,
    color: '#007AFF',
    backgroundColor: '#007AFF20',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  paymentAction: {
    padding: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 10,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuTitle: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  logoutSection: {
    margin: 15,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FF3B30',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});
