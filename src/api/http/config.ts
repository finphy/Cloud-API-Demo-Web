export const CURRENT_CONFIG = {
  // license
  appId: '132322', // You need to go to the development website to apply.
  appKey: '5f29b7682fa74e0a46760de8d8db81a', // You need to go to the development website to apply.
  appLicense:
    'P+WhFWQVGXmOkKIlr4OS87Q3Qw69ma7PbkOlbX95JnwYSdWEOF0xtd9U1oX0P+IZqa1RCTM/ZON3bsazWGy0+yjUiFsg8cQ2jDW/NK/63tv15Q7eJ/Pk3ObmGG5ZlYJH2Pf50Vy2ym5DtPX0dOGdQT1nve5wpZ56xqTDtezUdl0=', // You need to go to the development website to apply.

  // http
  baseURL: '/djiapi/', // This url must end with "/". Example: 'http://192.168.1.1:6789/'
  websocketURL: `${
    window.location.origin.startsWith('https')
      ? window.location.origin.replace('https://', 'wss://')
      : window.location.origin.replace('http://', 'ws://')
  }/djiws/api/v1/ws`, // Example: 'ws://192.168.1.1:6789/api/v1/ws'

  // livestreaming
  // RTMP  Note: This IP is the address of the streaming server. If you want to see livestream on web page, you need to convert the RTMP stream to WebRTC stream.
  rtmpURL: 'rtmps://g1.bimgram.com:1935/live/dji', // Example: 'rtmp://192.168.1.1/live/'
  // GB28181 Note:If you don't know what these parameters mean, you can go to Pilot2 and select the GB28181 page in the cloud platform. Where the parameters same as these parameters.
  gbServerIp: 'Please enter the server ip.',
  gbServerPort: 'Please enter the server port.',
  gbServerId: 'Please enter the server id.',
  gbAgentId: 'Please enter the agent id',
  gbPassword: 'Please enter the agent password',
  gbAgentPort: 'Please enter the local port.',
  gbAgentChannel: 'Please enter the channel.',
  // RTSP
  rtspUserName: 'Please enter the username.',
  rtspPassword: 'Please enter the password.',
  rtspPort: '8554',
  // Agora
  agoraAPPID: 'Please enter the agora app id.',
  agoraToken: 'Please enter the agora temporary token.',
  agoraChannel: 'Please enter the agora channel.',

  // map
  // You can apply on the AMap website.
  amapKey: '3672fbc3809351d5337edd168b3deae2',
}
