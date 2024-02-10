import 'package:flutter/material.dart';

class ChatMessage extends StatelessWidget {
  final String? text;
  final Widget? widget;
  final bool isSender;

  const ChatMessage({
    this.text,
    this.widget,
    required this.isSender,
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: isSender ? Alignment.centerRight : Alignment.centerLeft,
      child: Container(
        margin: const EdgeInsets.symmetric(
          vertical: 10.0,
          horizontal: 16.0,
        ),
        width: MediaQuery.of(context).size.width * 0.8,
        alignment: isSender ? Alignment.centerRight : Alignment.centerLeft,
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            !isSender ? const Icon(Icons.person) : Container(),
            !isSender
                ? Container(
                    decoration: BoxDecoration(
                      color: Colors.grey.withOpacity(0.5),
                      borderRadius: BorderRadius.circular(20),
                    ),
                    padding: const EdgeInsets.all(
                      10,
                    ),
                    child: text != null
                        ? Text(
                            text!,
                            style: const TextStyle(
                              color: Colors.black,
                            ),
                          )
                        : widget,
                  )
                : Container(),
            isSender
                ? Container(
                    decoration: BoxDecoration(
                      color: Colors.grey.withOpacity(0.5),
                      borderRadius: BorderRadius.circular(20),
                    ),
                    padding: const EdgeInsets.all(
                      10,
                    ),
                    child: Text(
                      text!,
                      style: const TextStyle(
                        color: Colors.black,
                      ),
                    ),
                  )
                : Container(),
            isSender
                ? const Icon(
                    Icons.person,
                    size: 30,
                  )
                : Container(),
          ],
        ),
      ),
    );
  }
}
