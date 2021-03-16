import React from 'react';
import { toast } from 'react-toastify';
import ToastContent from 'components/ToastContent';

/**
 * Функция которая возвращает всплывающее окно ( Тост) с текстом ошибки
 *
 * @param  text {String} - Текст тоста
 * @param toastId {String} Id определенного тоста
 * @returns {Number} Id определенного тоста
 */
export const error = (text, toastId = null) => toast.error(<ToastContent type="error" text={text} />, toastId && { toastId });
/**
 * Функция которая возвращает всплывающее окно ( Тост) с текстом успешного выполнения
 *
 * @param  text {String}- Текст тоста
 * @returns {Number} Id определенного тоста
 */
export const success = text => toast.success(<ToastContent type="success" text={text} />);
/**
 * Функция которая возвращает всплывающее окно ( Тост) с текстом предупреждения
 *
 * @param  text {String} - Текст тоста
 */
export const warning = text => toast.warn(<ToastContent type="warning" text={text} />);
/**
 * Функция которая обновляет тост
 *
 * @param  text {String} - Текст тоста
 * @param onClick Функция которая сработает при клике на тост
 */
export const refresh = (text, onClick) =>
  toast.info(<ToastContent type="info" text={text} onClick={onClick} />, { autoClose: false, position: 'bottom-center', toastId: 'forum-refresh' });
/**
 * Удаляет тост по Id
 *
 * @param toastId {String} Id определенного тоста
 */
export const dismiss = toastId => toast.dismiss(toastId);
