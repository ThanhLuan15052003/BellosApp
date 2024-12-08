import {StyleSheet} from 'react-native';
const stylesHistory = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1E26',
    paddingTop: 20,
  },
  sectionHeader: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  list: {
    paddingHorizontal: 9,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  card: {
    backgroundColor: 'rgba(60, 72, 104, 1)',
    borderRadius: 11,
    margin: 5,
    flex: 1,
    borderWidth: 3,
  },
  cardPlaceholder: {
    flex: 1,
    margin: 5,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  viewWinner: {
    backgroundColor: 'rgba(31, 35, 50, 1)',
    borderRadius: 15,
    flexDirection: 'row',
    gap: 4,
    paddingTop: 2,
    paddingLeft: 2,
    paddingBottom: 2,
  },
  imageUser: {
    width: 27,
    height: 27,
    borderRadius: 50,
  },
  winner: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
  role: {
    color: 'rgba(171, 183, 206, 1)',
    fontSize: 10,
    fontWeight: '400',
  },
  textMessage: {
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
  },
  subtitle: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '700',
    lineHeight: 16,
    paddingTop: 8,
    textAlign: 'center',
  },
  viewTitle: {
    flexDirection: 'row',
    gap: 5,
    paddingTop: 12,
    paddingBottom: 19,
  },
  viewBox: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 8,
  },
  viewCart: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 6,
    flexDirection: 'column',
  },
  name: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingTop: 4,
  },
  viewCoconut: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
    paddingBottom: 8,
  },
  coconut: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  viewParticipation: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingLeft: 4,
    paddingRight: 4,
  },
  viewDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: 8,
    paddingRight: 8,
  },
  viewDateTime: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    maxWidth: '55%',
  },
  viewBid: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    maxWidth: '45%',
  },
  date: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  viewButton: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 4,
    paddingTop: 8,
    paddingBottom: 7,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(199, 87, 124, 1)',
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
  },
  buttonText: {
    color: 'rgba(31, 35, 50, 1)',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 12,
    marginRight: 5,
  },
  buttonPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  soldPrice: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default stylesHistory;
