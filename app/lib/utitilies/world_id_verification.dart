import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class WorldIDVerification extends StatefulWidget {
  @override
  _WorldIDVerificationState createState() => _WorldIDVerificationState();
}

class _WorldIDVerificationState extends State<WorldIDVerification> {
  WebViewController? _controller;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('World ID Verification'),
      ),
      body: WebView(
        initialUrl: 'https://developer.worldcoin.org/verify?client_id=app_staging_d2fdb1622a1a3f396abdecf1eef2efad',
        javascriptMode: JavascriptMode.unrestricted,
        onWebViewCreated: (WebViewController controller) {
          _controller = controller;
        },
        navigationDelegate: (NavigationRequest request) {
          if (request.url.startsWith('https://your-backend.com/callback')) {
            // You will receive the verification token here
            final token = request.url.split('?token=')[1];
            _handleVerificationToken(token);
            return NavigationDecision.prevent;
          }
          return NavigationDecision.navigate;
        },
      ),
    );
  }

  void _handleVerificationToken(String token) {
    // Send the token to your backend or use it in your app
    print('Verification Token: $token');
  }
}
