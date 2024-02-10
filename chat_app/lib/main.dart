import 'package:chat_app/chat_page.dart';
import 'package:chat_app/provider/chat_provider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: ChangeNotifierProvider(
        create: (_) => ChatProvider(),
        child: const ChatPage(),
      ),
    );
  }
}
