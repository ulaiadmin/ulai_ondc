import 'dart:developer';
import 'package:chat_app/controller/chat_controller.dart';
import 'package:chat_app/util/string.dart';
import 'package:chat_app/widgets/chat_message.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class ChatProvider extends ChangeNotifier {
  final ChatController _chatController = ChatController();

  List<ChatMessage> messages = [];

  sendMessage(String query) async {
    log("query is : $query");
    messages.add(ChatMessage(isSender: true, text: query));

    var message = await _chatController.sendMessage(query);
    if (message != null) {
      log("herereee ${message.data == null}");
      if (message.data == null) {
        log("provider message: $message");
        messages = [
          ...messages,
          ChatMessage(
            isSender: false,
            text: message.message,
          )
        ];
      } else {
        log("fsdfsdfs f");
        var list = message.data!;
        for (var e in list) {
          var context = e.context!;
          messages.add(
            ChatMessage(
              isSender: false,
              widget: GestureDetector(
                onTap: () async {
                  var url =
                      "${baseUrl}messageid/${context.messageId}/bppId/${context.bppId}";
                  log("clicked url is: $url");
                  try {
                    launchUrl(Uri.parse(url));
                  } catch (e) {
                    log("failed to open url: ${e.toString()}");
                  }
                },
                child: Text(
                  e.message!.catalog!.bppProviders!.first.descriptor!.name!,
                  style: const TextStyle(
                    color: Colors.blue,
                    decoration: TextDecoration.underline,
                    decorationColor: Colors.blue,
                  ),
                ),
              ),
            ),
          );
        }
        messages = [...messages];
      }

      notifyListeners();
    }
  }
}
