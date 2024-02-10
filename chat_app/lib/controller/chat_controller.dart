import 'dart:developer';

import 'package:chat_app/model/message_model.dart';
import 'package:chat_app/util/string.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class ChatController {
  final url = "${baseUrl}send-message";

  Future<MessageModel?> sendMessage(String message) async {
    log("controller message: $message");
    try {
      final response = await http.post(
        Uri.parse(url),
        body: {"message": message},
      );
      //log("response: ${response.body}");
      if (response.statusCode == 200) {
        return MessageModel.fromJson(jsonDecode(response.body));
      } else {
        log("status code: ${response.statusCode}");
        return null;
      }
    } catch (e) {
      print("Catch block: sendMessage");
      log("error: ${e.toString()}");
      return null;
    }
  }
}
