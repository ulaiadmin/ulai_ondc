import 'dart:developer';

import 'package:flutter/material.dart';
//import 'package:image_picker/image_picker.dart';

class ChatInputBar extends StatefulWidget {
  final Color color;
  final Function(String) onSubmitted;

  const ChatInputBar({
    required this.color,
    required this.onSubmitted,
    Key? key,
  }) : super(key: key);

  @override
  State<ChatInputBar> createState() => _ChatInputBarState();
}

class _ChatInputBarState extends State<ChatInputBar> {
  final TextEditingController _textController = TextEditingController();

  void _handleSubmitted(String text) {
    log("text is: $text");
    _textController.clear();
    widget.onSubmitted(text);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(8.0),
      child: Row(
        children: <Widget>[
          Expanded(
            child: Stack(
              alignment: Alignment.center,
              children: [
                TextField(
                  controller: _textController,
                  onSubmitted: _handleSubmitted,
                  decoration: InputDecoration(
                    border: OutlineInputBorder(
                      borderSide: BorderSide(
                        color: widget.color,
                      ),
                      borderRadius: BorderRadius.circular(50),
                    ),
                    enabledBorder: OutlineInputBorder(
                      borderSide: BorderSide(
                        color: widget.color,
                      ),
                      borderRadius: BorderRadius.circular(50),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderSide: BorderSide(
                        color: widget.color,
                      ),
                      borderRadius: BorderRadius.circular(50),
                    ),
                    hintText: 'Send a message...',
                  ),
                ),
                Positioned(
                  right: 0,
                  child: Container(
                    height: 55,
                    width: 55,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: widget.color,
                      shape: BoxShape.circle,
                    ),
                    child: Padding(
                      padding: const EdgeInsets.only(left: 5.0),
                      child: IconButton(
                        icon: const Icon(
                          Icons.send,
                          color: Colors.white,
                        ),
                        onPressed: () => _handleSubmitted(_textController.text),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
