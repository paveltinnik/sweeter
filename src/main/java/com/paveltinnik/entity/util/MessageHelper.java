package com.paveltinnik.entity.util;

import com.paveltinnik.entity.User;

public abstract class MessageHelper {
	public static String getAuthorName(User author) {
		return author != null ? author.getUsername() : "<none>";
	}
}