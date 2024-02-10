import 'package:chat_app/provider/chat_provider.dart';
import 'package:chat_app/widgets/chat_input_bar.dart';
import 'package:chat_app/widgets/chat_message.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class ChatPage extends StatelessWidget {
  const ChatPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('ChatBot'),
      ),
      body: Column(
        children: <Widget>[
          Expanded(
            child:
                Consumer<ChatProvider>(builder: (context, chatProvider, child) {
              var messages = chatProvider.messages;
              return ListView.builder(
                //reverse: true,
                itemCount: messages.length,
                itemBuilder: (context, index) {
                  var message = messages[index];
                  return ChatMessage(
                    isSender: message.isSender,
                    text: message.text,
                    widget: message.widget,
                  );
                },
              );
            }),
          ),
          // const Divider(height: 1.0),
          ChatInputBar(
            color: Colors.purple,
            onSubmitted: (message) {
              FocusNode().requestFocus();
              context.read<ChatProvider>().sendMessage(message);
            },
          ),
          const SizedBox(
            height: 10,
          ),
        ],
      ),
    );
  }
}
