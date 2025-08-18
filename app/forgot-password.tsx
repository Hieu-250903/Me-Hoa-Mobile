import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ForgotPassword() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Quên mật khẩu</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Logo Section */}
      <View style={styles.logoSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="key" size={60} color="#FF9500" />
        </View>
        <Text style={styles.logoTitle}>Đặt lại mật khẩu</Text>
        <Text style={styles.logoSubtitle}>Nhập email để nhận link khôi phục</Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Ionicons name="mail" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Nhập email của bạn"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#999"
            />
          </View>
          
          <TouchableOpacity style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Gửi link khôi phục</Text>
          </TouchableOpacity>

          <View style={styles.infoSection}>
            <View style={styles.infoContainer}>
              <Ionicons name="information-circle" size={20} color="#FF9500" />
              <Text style={styles.infoText}>
                Chúng tôi sẽ gửi link khôi phục mật khẩu vào email của bạn
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Alternative Options */}
      <View style={styles.alternativeSection}>
        <Text style={styles.alternativeTitle}>Các cách khác</Text>
        
        <TouchableOpacity style={styles.alternativeButton}>
          <Ionicons name="call" size={20} color="#007AFF" />
          <Text style={styles.alternativeButtonText}>Gọi hỗ trợ khách hàng</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.alternativeButton}>
          <Ionicons name="chatbubble" size={20} color="#007AFF" />
          <Text style={styles.alternativeButtonText}>Chat với chúng tôi</Text>
        </TouchableOpacity>
      </View>

      {/* Links */}
      <View style={styles.links}>
        <Link href="/login" style={styles.link}>
          <Ionicons name="arrow-back" size={16} color="#007AFF" />
          <Text style={styles.linkText}>Quay lại đăng nhập</Text>
        </Link>
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
    backgroundColor: '#FF9500',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  placeholder: {
    width: 34,
  },
  logoSection: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 15,
  },
  logoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  logoSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  form: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
    color: '#333',
  },
  resetButton: {
    backgroundColor: '#FF9500',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoSection: {
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFF3E0',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FF9500',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
    flex: 1,
    lineHeight: 20,
  },
  alternativeSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  alternativeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  alternativeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    gap: 12,
  },
  alternativeButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  links: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 8,
  },
  linkText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
});
