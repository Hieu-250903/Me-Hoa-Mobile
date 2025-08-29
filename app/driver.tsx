import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Driver() {
  const driverStats = [
    { id: 1, title: 'Chuyến đã hoàn thành', value: '156', icon: 'checkmark-circle' as const, color: '#34C759' },
    { id: 2, title: 'Đánh giá trung bình', value: '4.8', icon: 'star' as const, color: '#FF9500' },
    { id: 3, title: 'Thu nhập tháng này', value: '12.5M', icon: 'wallet' as const, color: '#007AFF' },
    { id: 4, title: 'Thời gian online', value: '8h', icon: 'time' as const, color: '#5856D6' }
  ];

  const recentTrips = [
    {
      id: 1,
      customer: 'Nguyễn Văn A',
      from: 'Sân bay Đà Nẵng',
      to: 'Hội An',
      date: 'Hôm nay, 14:30',
      status: 'Đang di chuyển',
      amount: '800.000đ',
      rating: 5
    },
    {
      id: 2,
      customer: 'Trần Thị B',
      from: 'Bà Nà Hills',
      to: 'Đà Nẵng',
      date: 'Hôm qua, 16:00',
      status: 'Hoàn thành',
      amount: '1.200.000đ',
      rating: 4
    },
    {
      id: 3,
      customer: 'Lê Văn C',
      from: 'Ngũ Hành Sơn',
      to: 'Bán đảo Sơn Trà',
      date: '2 ngày trước, 09:15',
      status: 'Hoàn thành',
      amount: '600.000đ',
      rating: 5
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'new_trip',
      title: 'Chuyến mới',
      message: 'Có chuyến từ Sân bay Đà Nẵng đến Hội An',
      time: '2 phút trước',
      unread: true
    },
    {
      id: 2,
      type: 'rating',
      title: 'Đánh giá mới',
      message: 'Khách hàng đã đánh giá chuyến đi của bạn',
      time: '1 giờ trước',
      unread: false
    },
    {
      id: 3,
      type: 'payment',
      title: 'Thanh toán',
      message: 'Đã nhận thanh toán 800.000đ',
      time: '3 giờ trước',
      unread: false
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Link href="/Home" asChild>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          </Link>
          <View style={styles.profileSection}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/60x60/007AFF/FFFFFF?text=TX' }} 
              style={styles.profileImage} 
            />
            <View style={styles.profileInfo}>
              <Text style={styles.driverName}>Nguyễn Đức Nhật An</Text>
              <Text style={styles.driverStatus}>Đang online</Text>
              <View style={styles.statusIndicator} />
            </View>
          </View>
          <TouchableOpacity style={styles.settingsButton}>
            <Ionicons name="settings" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        {driverStats.map((stat) => (
          <View key={stat.id} style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: stat.color + '20' }]}>
              <Ionicons name={stat.icon} size={24} color={stat.color} />
            </View>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statTitle}>{stat.title}</Text>
          </View>
        ))}
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Thao tác nhanh</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Ionicons name="car" size={32} color="#007AFF" />
            </View>
            <Text style={styles.actionText}>Nhận chuyến</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Ionicons name="map" size={32} color="#34C759" />
            </View>
            <Text style={styles.actionText}>Theo dõi hành trình</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Ionicons name="calendar" size={32} color="#FF9500" />
            </View>
            <Text style={styles.actionText}>Lịch chạy</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Ionicons name="chatbubble" size={32} color="#5856D6" />
            </View>
            <Text style={styles.actionText}>Chat khách hàng</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Trips */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Chuyến gần đây</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        
        {recentTrips.map((trip) => (
          <View key={trip.id} style={styles.tripCard}>
            <View style={styles.tripHeader}>
              <Text style={styles.customerName}>{trip.customer}</Text>
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
            
            <View style={styles.tripFooter}>
              <Text style={styles.tripDate}>{trip.date}</Text>
              <View style={styles.tripRating}>
                <Ionicons name="star" size={16} color="#FF9500" />
                <Text style={styles.ratingText}>{trip.rating}</Text>
              </View>
              <Text style={styles.tripAmount}>{trip.amount}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Notifications */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Thông báo</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        
        {notifications.map((notification) => (
          <TouchableOpacity key={notification.id} style={[styles.notificationCard, notification.unread && styles.unreadNotification]}>
            <View style={styles.notificationIcon}>
              <Ionicons 
                name={
                  notification.type === 'new_trip' ? 'car' :
                  notification.type === 'rating' ? 'star' : 'card'
                } 
                size={20} 
                color="#007AFF" 
              />
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>
            {notification.unread && <View style={styles.unreadDot} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Driver Registration */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Đăng ký tài xế</Text>
        <View style={styles.registrationCard}>
          <View style={styles.registrationHeader}>
            <Ionicons name="person-add" size={32} color="#007AFF" />
            <Text style={styles.registrationTitle}>Trở thành tài xế</Text>
          </View>
          <Text style={styles.registrationDescription}>
            Gửi thông tin cá nhân, giấy phép lái xe và hình ảnh xe để được duyệt
          </Text>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Đăng ký ngay</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Reviews */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Đánh giá từ khách hàng</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/40x40/FF6B6B/FFFFFF?text=KH' }} 
              style={styles.reviewerImage} 
            />
            <View style={styles.reviewerInfo}>
              <Text style={styles.reviewerName}>Nguyễn Thị D</Text>
              <View style={styles.reviewStars}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Ionicons key={star} name="star" size={16} color="#FF9500" />
                ))}
              </View>
            </View>
            <Text style={styles.reviewDate}>2 ngày trước</Text>
          </View>
          <Text style={styles.reviewText}>
            "Tài xế rất thân thiện và chuyên nghiệp. Xe sạch sẽ, lái xe an toàn. Rất hài lòng với dịch vụ!"
          </Text>
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
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  driverName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  driverStatus: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 4,
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#34C759',
  },
  backButton: {
    padding: 5,
  },
  settingsButton: {
    padding: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
    gap: 10,
  },
  statCard: {
    width: '48%',
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
  statIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
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
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  actionCard: {
    width: '48%',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  actionIcon: {
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
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
  customerName: {
    fontSize: 16,
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
  tripFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tripDate: {
    fontSize: 12,
    color: '#666',
  },
  tripRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  tripAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 10,
  },
  unreadNotification: {
    backgroundColor: '#E3F2FD',
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  notificationMessage: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 10,
    color: '#999',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
  },
  registrationCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  registrationHeader: {
    alignItems: 'center',
    marginBottom: 10,
  },
  registrationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  registrationDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 20,
  },
  registerButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  reviewCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 15,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  reviewerInfo: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  reviewStars: {
    flexDirection: 'row',
  },
  reviewDate: {
    fontSize: 12,
    color: '#666',
  },
  reviewText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});
